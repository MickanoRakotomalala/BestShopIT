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
        public IActionResult Index()
        {
            var products = context.Products.ToList();
            return View(products);
        }
    }
}
