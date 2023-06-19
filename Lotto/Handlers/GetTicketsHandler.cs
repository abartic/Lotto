using Lotto.Data;
using Lotto.Entities;
using Lotto.Queries;
using MediatR;

namespace Lotto.Handlers
{
    public class GetTicketsHandler : IRequestHandler<GetTicketsQuery, IEnumerable<Ticket>>
    {
        private readonly ITicketRepository ticketRepository;

        public GetTicketsHandler(ITicketRepository ticketRepository)
        {
            this.ticketRepository = ticketRepository;
        }

        public async Task<IEnumerable<Ticket>> Handle(GetTicketsQuery request,
            CancellationToken cancellationToken) => await ticketRepository.GetAll();
    }
}
