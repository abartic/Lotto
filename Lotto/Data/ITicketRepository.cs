using Lotto.Entities;
using MediatR;

namespace Lotto.Data
{
    public interface ITicketRepository
    {
        Task<IEnumerable<Ticket>> GetAll();
        Task<Ticket> GetByTicketNumber(Guid serialNumber);
        Task Create(Ticket ticket);
        Task Update(Ticket ticket);
        Task Delete(Guid serialNumber);
        Task Save();
    }

    
}
