using Lotto.Entities;
using MediatR;

namespace Lotto.Commands
{
    public record GenerateTicketCommand(byte boxCount, bool hasSuperNumber) : IRequest<Ticket>;
}
