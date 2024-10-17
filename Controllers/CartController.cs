using BestShopIT.Models;
using BestShopIT.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BestShopIT.Controllers
{
    public class CartController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly decimal ShippingFee;

        public CartController(ApplicationDbContext context, IConfiguration configuration, UserManager<ApplicationUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
            ShippingFee = configuration.GetValue<decimal>("CartSettings:ShippingFee");
        }

        public IActionResult Index()
        {
            List<OrderItem> cartItems = CartHelper.GetCartItems(Request, Response, context);
            decimal subtotal = CartHelper.GetSubtotal(cartItems);

            ViewBag.CartItems = cartItems;
            ViewBag.ShippingFee = ShippingFee;
            ViewBag.Subtotal = subtotal;
            ViewBag.Total = subtotal + ShippingFee;

            return View();
        }

        [Authorize]
        [HttpPost]
        public IActionResult Index(CheckoutDto model) 
        {
            List<OrderItem> cartItems = CartHelper.GetCartItems(Request, Response, context);
            decimal subtotal = CartHelper.GetSubtotal(cartItems);

            ViewBag.CartItems = cartItems;
            ViewBag.ShippingFee = ShippingFee;
            ViewBag.Subtotal = subtotal;
            ViewBag.Total = subtotal + ShippingFee;

            if (!ModelState.IsValid)
            { 
                return View(model);
            }

            // Check if shopping cart is empty or not
            if(cartItems.Count == 0)
            {
                ViewBag.ErrorMessage = "Your car is empty";
                return View(model);
            }

            TempData["DeliveryAddress"] = model.DeliveryAddress;
            TempData["PaymentMethod"] = model.PayementMehod;

            return RedirectToAction("Confirm");
        }
    }
}
