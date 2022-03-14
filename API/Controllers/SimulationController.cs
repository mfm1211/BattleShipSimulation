using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SimulationController : BaseApiController
    {
        Simulation _simulation;
        public SimulationController(Simulation simulation)
        {
            _simulation = simulation;
        }

        [HttpGet]
        public PlayerModel[] Get()
        {
            _simulation.MakeNextMove();
            return _simulation.Players;
        }
    }
}