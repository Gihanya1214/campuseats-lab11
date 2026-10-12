using CampusEats.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CampusEats.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MenuController : ControllerBase
{
    private readonly CampusEatsContext _context;
    private readonly ILogger<MenuController> _logger;

    public MenuController(CampusEatsContext context, ILogger<MenuController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetMenu()
    {
        _logger.LogInformation("GET /api/menu requested");

        try
        {
            var items = await _context.MenuItems.AsNoTracking().ToListAsync();
            return Ok(items);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Database unavailable — returning in-memory menu seed");
            return Ok(CampusEats.Api.Data.FallbackMenu.Items);
        }
    }
}
