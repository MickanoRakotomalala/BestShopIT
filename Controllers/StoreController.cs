using BestShopIT.Services;
using Microsoft.AspNetCore.Mvc;

namespace BestShopIT.Controllers
{
    public class StoreController : Controller
    {
        private readonly ApplicationDbContext context;

        public StoreController(ApplicationDbContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            var products = context.Products.OrderByDescending(p => p.Id).ToList();

            ViewBag.Products = products;
            return View();
        }
    }
}
