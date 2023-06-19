using Lotto.Commands;
using Lotto.Common;
using Lotto.Controllers;
using Lotto.Data;
using Lotto.Entities;
using Lotto.Queries;
using Lotto.Services;
using MediatR;
using System.Text.Json;

namespace Lotto.Handlers
{
    public class GenerateTicketCommandHandler : IRequestHandler<GenerateTicketCommand, Ticket>
    {
        private readonly ITicketRepository ticketRepository;
        private readonly ILottoNumberGeneratorService ticketGenerator;
        private readonly ILogger<TicketController> logger;

        public GenerateTicketCommandHandler(
            ILogger<TicketController> logger,
            ITicketRepository ticketRepository, 
            ILottoNumberGeneratorService ticketGenerator)
        {
            this.logger = logger;
            this.ticketRepository = ticketRepository;
            this.ticketGenerator = ticketGenerator;
        }

        public async Task<Ticket> Handle(GenerateTicketCommand command, CancellationToken cancellationToken)
        {
            Ticket ticket = new Ticket(command.boxCount);
            
            ParallelOptions parallelOptions = new()
            {
                MaxDegreeOfParallelism = 3
            };
            await Parallel.ForEachAsync(
                ticket.TicketBoxes, 
                parallelOptions,
                async (ticketBox, cancelToken) =>
                {
                    var boxNumbers = await this.ticketGenerator.GenerateTicketBoxNumbers();
                    ticketBox.Numbers = boxNumbers;
                });
            if (command.hasSuperNumber)
                ticket.SuperNumber = System.Convert.ToByte(new Random().Next(Config.LOTTO_MAX_NUMBER));

            await ticketRepository.Create(ticket);

            this.logger.LogInformation($"Ticket {ticket.SerialNumber} generated! Numbers: {JsonSerializer.Serialize(ticket.TicketBoxes)}");
            return ticket;
        }
    }
}
