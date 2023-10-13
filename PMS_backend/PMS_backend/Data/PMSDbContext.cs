using Microsoft.EntityFrameworkCore;
using PMS_backend.Models;

namespace PMS_backend.Data
{
    public class PMSDbContext : DbContext
    {
        public PMSDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

    }
}
