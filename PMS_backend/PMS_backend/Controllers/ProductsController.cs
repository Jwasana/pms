using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS_backend.Data;

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
    }
}
