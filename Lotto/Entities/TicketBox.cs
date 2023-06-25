using Lotto.Common;

namespace Lotto.Entities
{
    public class TicketBox
    {
        public short[] Numbers { get; set; } = new short[Constants.LOTTO_EXTRACTED_NUMBERS];
    }
}
