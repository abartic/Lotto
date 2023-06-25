using Lotto.Data;
using Lotto.Entities;
using Lotto.Queries;
using MediatR;

namespace Lotto.Handlers
{
    public class GetTicketBySerialNumberQueryHandler : IRequestHandler<GetTicketBySerialNumberQuery, Ticket>
    {
        private readonly ITicketRepository ticketRepository;

        public GetTicketBySerialNumberQueryHandler(ITicketRepository ticketRepository)
        {
            this.ticketRepository = ticketRepository;
        }

        public async Task<Ticket> Handle(GetTicketBySerialNumberQuery request,
            CancellationToken cancellationToken) => await ticketRepository.GetByTicketNumber(request.serialNumber);
    }
}
