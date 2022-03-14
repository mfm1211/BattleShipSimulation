using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PlayerController: BaseApiController
    {
        Simulation _simulation;
        public PlayerController(Simulation simulation)
        {
            _simulation = simulation;
        }

        [HttpGet]
        public PlayerModel[] Get()
        {
            _simulation.CreatePlayers();
            return _simulation.Players;
        }
    }
}