namespace Lotto.Services
{
    public interface ILottoNumberGeneratorService
    {
        Task<short[]> GenerateTicketBoxNumbers();
    }
}
