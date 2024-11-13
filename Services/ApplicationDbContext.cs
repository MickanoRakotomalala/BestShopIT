using Microsoft.EntityFrameworkCore;
using BestShopIT.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BestShopIT.Services
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
