using Lotto.Entities;
using MediatR;

namespace Lotto.Queries
{
    public record GetTicketBySerialNumberQuery(Guid serialNumber) : IRequest<Ticket>;
    
}
