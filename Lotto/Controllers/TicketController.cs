using Lotto.Commands;
using Lotto.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Lotto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketController : ControllerBase
    {

        private readonly ILogger<TicketController> logger;
        private readonly IMediator mediator;

        public TicketController(ILogger<TicketController> logger,  IMediator mediator)
        {
            this.logger = logger;
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> All()
        {
            var data = await mediator.Send(new GetTicketsQuery());
            return Ok(data);
        }

        [HttpGet("{serialNumber}", Name="GetTicketBySerialNumber")]
        public async Task<ActionResult> Get(Guid serialNumber)
        {
            var data = await mediator.Send(new GetTicketBySerialNumberQuery(serialNumber));
            return Ok(data);
            
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromQuery] byte boxCount, [FromQuery] bool hasSuperNumber)
        {
            var ticketToReturn = await mediator.Send(new GenerateTicketCommand(boxCount, hasSuperNumber));
            return CreatedAtRoute("GetTicketBySerialNumber", new { serialNumber = ticketToReturn.SerialNumber }, ticketToReturn);

           
        }
    }
}