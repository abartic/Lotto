using Lotto.Entities;

namespace Lotto.Data
{
    public class TicketRepository : ITicketRepository
    {
        private Dictionary<Guid, Ticket> Db = new Dictionary<Guid, Ticket>();

        public async Task Create(Ticket ticket)
        {
            await Task.Run(() => Db.Add(ticket.SerialNumber, ticket));
        }

        public async Task Delete(Guid serialNumber)
        {
            await Task.Run(()=>this.Db.Remove(serialNumber));
        }

        public async Task<IEnumerable<Ticket>> GetAll()
        {
            return await Task.FromResult(this.Db.Values.AsEnumerable()); 
        }

        public async Task<Ticket> GetByTicketNumber(Guid serialNumber)
        {
            return await Task.FromResult(this.Db[serialNumber]);
        }

        public async Task Save()
        {
            //TODO if using a real db
        }

        public async Task Update(Ticket ticket)
        {
            await Task.Run(()=> this.Db[ticket.SerialNumber] = ticket);
        }
    }
}
