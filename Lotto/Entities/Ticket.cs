using Lotto.Common;
using System.Reflection.Metadata.Ecma335;

namespace Lotto.Entities
{
    public class Ticket
    {
        public Ticket(byte boxCount)
        {
            SerialNumber = Guid.NewGuid();
            TicketBoxes = Enumerable.Range(1, boxCount).Select(b => new TicketBox()).ToList();
        }

        public Guid SerialNumber { get; private set; }
        public List<TicketBox> TicketBoxes { get; set; } = new List<TicketBox>();
        public byte? SuperNumber { get; set; }
    }


}