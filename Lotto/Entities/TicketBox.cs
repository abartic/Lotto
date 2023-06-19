using Lotto.Common;
using System.Text.Json.Serialization;

namespace Lotto.Entities
{
    public class TicketBox
    {
        //[JsonConverter(typeof(byte[]))] 
        public short[] Numbers { get; set; } = new short[Config.LOTTO_EXTRACTED_NUMBERS];
    }
}
