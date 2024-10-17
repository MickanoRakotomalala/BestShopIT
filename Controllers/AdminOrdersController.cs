using BestShopIT.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BestShopIT.Controllers
{
    [Authorize(Roles ="admin")]
    [Route("/Admin/Orders/{action=Index}/{id?}")]
    public class AdminOrdersController : Controller
    {
        private readonly ApplicationDbContext context;

        public AdminOrdersController(ApplicationDbContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            var orders = context.Orders.Include(o => o.Client).Include(o => o.Items).OrderByDescending(o => o.Id).ToList();

            ViewBag.Orders = orders;
            return View();
        }
    }
}
