using BestShopIT.Models;
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
        private readonly int pageSize = 2;

        public AdminOrdersController(ApplicationDbContext context)
        {
            this.context = context;
        }
        public IActionResult Index(int pageIndex)
        {
            IQueryable<Order> query = context.Orders.Include(o => o.Client).Include(o => o.Items).OrderByDescending(o => o.Id);

            if (pageIndex <= 0) 
            {
                pageIndex = 1;
            }

            decimal count = query.Count();
            int totalPages = (int)Math.Ceiling(count / pageSize);

            query = query.Skip((pageIndex - 1) * pageSize).Take(pageSize);

            var orders = query.ToList();
            ViewBag.Orders = orders;
            ViewBag.PageIndex = pageIndex;
            ViewBag.TotalPages = totalPages;

            return View();
        }
    }
}
