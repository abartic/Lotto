using Lotto.Data;
using Lotto.Entities;
using Lotto.Queries;
using MediatR;

namespace Lotto.Handlers
{
    public class GetTicketsQueryHandler : IRequestHandler<GetTicketsQuery, IEnumerable<TicketListItem>>
    {
        private readonly ITicketRepository ticketRepository;

        public GetTicketsQueryHandler(ITicketRepository ticketRepository)
        {
            this.ticketRepository = ticketRepository;
        }

        public async Task<IEnumerable<TicketListItem>> Handle(GetTicketsQuery request, CancellationToken cancellationToken) 
        {
            var tickets = await ticketRepository.GetAll();
            return tickets.Select(t => new TicketListItem() {BoxCount = t.TicketBoxes.Count, SerialNumber = t.SerialNumber, HasSuperNumber = t.SuperNumber.HasValue });
        }
    }
}
