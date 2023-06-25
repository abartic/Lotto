using Lotto.Common;
using Lotto.Controllers;

namespace Lotto.Services
{
    public class LottoNumberGeneratorService : ILottoNumberGeneratorService
    {
        private readonly ILogger<TicketController> logger;

        public LottoNumberGeneratorService(ILogger<TicketController> logger)
        {
            this.logger = logger;
        }

        public async Task<short[]> GenerateTicketBoxNumbers()
        {
            List<int> allNumbers = Enumerable.Range(Constants.LOTTO_MIN_NUMBER, Constants.LOTTO_MAX_NUMBER).ToList();

            List<int> extractedNumbers = new List<int>();

            for (int i = 1; i <= Constants.LOTTO_EXTRACTED_NUMBERS; i++)
            {
                var selectedIndex = await Task.Run<int>(() => { return allNumbers.Count == 1 ? 0 : new Random().Next() % allNumbers.Count; });
                this.logger.LogInformation($"{(new Random().Next()) % allNumbers.Count}");
                extractedNumbers.Add(allNumbers[selectedIndex]);

                allNumbers.RemoveAt(selectedIndex);
            }

            return extractedNumbers.Select(n => (short)n).OrderBy(n=>n).ToArray();
        }

        
    }
}
