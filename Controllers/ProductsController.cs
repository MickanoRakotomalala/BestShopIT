using BestShopIT.Services;
using Microsoft.AspNetCore.Mvc;

namespace BestShopIT.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext context;

        //Connection to the Database
        public ProductsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        //[HttpGet]
        public IActionResult Index()
        {
            //Z --> A
            //var products = context.Products.OrderByDescending(p => p.Id).ToList();

            //A --> Z
            var products = context.Products.OrderBy(p => p.Id).ToList();
            return View(products);
        }

        public IActionResult Create()
        {
            return View();
        }
    }
}
