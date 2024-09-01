using BestShopIT.Models;
using BestShopIT.Services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BestShopIT.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext context;

        //Connection to the Database
        public ProductsController(ApplicationDbContext context, IWebHostEnvironment environment)
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

        [HttpPost]
        public IActionResult Create(ProductDto productDto)
        {
            if (productDto.ImageFile == null)
            {
                ModelState.AddModelError("ImageFile", "The image file is required");   
            }

            if (!ModelState.IsValid) 
            {
                return View(productDto);
            }

            // save the image file
            string newFileName = DateTime.Now.ToString("yyyyMMddHHmmssfff");
            newFileName += Path.GetExtension(productDto.ImageFile!.FileName);

            string imageFullPath = Environment.WebRootPath + "/products" + newFileName;
            using (var stream = System.IO.File.Create(imageFullPath))
            { 
                productDto.ImageFile.CopyTo(stream);
            }
            return RedirectToAction("Index","Products");
        }
    }
}
