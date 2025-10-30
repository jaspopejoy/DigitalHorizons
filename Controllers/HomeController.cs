using Microsoft.AspNetCore.Mvc;

namespace DigitalHorizon.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
