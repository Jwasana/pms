using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS_backend.Data;
using PMS_backend.Models;

namespace PMS_backend.Controllers
{
    [Controller]
    [Route("/api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly PMSDbContext _pmsDbContext;
        public ProductsController(PMSDbContext pmsDbContext) 
        {
            this._pmsDbContext = pmsDbContext;
        
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _pmsDbContext.Products.ToArrayAsync();

                return Ok(products);
           
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            product.Id = Guid.NewGuid();

           await _pmsDbContext.Products.AddAsync(product);
            await _pmsDbContext.SaveChangesAsync();

                return Ok(product);
        }
    }
}
