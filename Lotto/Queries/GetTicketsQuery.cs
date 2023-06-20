using Lotto.Entities;
using MediatR;

namespace Lotto.Queries
{
    public record GetTicketsQuery() : IRequest<IEnumerable<TicketListItem>>;
}
