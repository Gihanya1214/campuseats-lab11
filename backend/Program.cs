using CampusEats.Api.Data;
using CampusEats.Api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var frontendOrigin = builder.Configuration["FrontendOrigin"]
    ?? "https://campuseats-web.vercel.app";

builder.Services.AddCors(o => o.AddPolicy("Frontend", p =>
    p.WithOrigins(frontendOrigin.TrimEnd('/'))
     .AllowAnyHeader()
     .AllowAnyMethod()));

var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<CampusEatsContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("Frontend");

app.MapControllers();

app.MapGet("/", () => Results.Ok(new
{
    service = "CampusEats.Api",
    status = "running",
    docs = "/swagger"
}));

app.Run();

namespace CampusEats.Api.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;
        public bool SoldOut { get; set; }
    }
}

namespace CampusEats.Api.Data
{
    public class CampusEatsContext : DbContext
    {
        public CampusEatsContext(DbContextOptions<CampusEatsContext> options) : base(options)
        {
        }

        public DbSet<MenuItem> MenuItems => Set<MenuItem>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MenuItem>().HasData(
                new MenuItem { Id = 1, Name = "Classic Burger", Description = "A juicy grilled beef burger served with lettuce, tomato, and cheese.", Price = 450, Category = "Main", SoldOut = false },
                new MenuItem { Id = 2, Name = "Veggie Pasta", Description = "Creamy pasta tossed with fresh vegetables and herbs.", Price = 380, Category = "Main", SoldOut = false },
                new MenuItem { Id = 3, Name = "Chicken Wrap", Description = "Grilled chicken wrapped with salad and spicy sauce.", Price = 320, Category = "Snack", SoldOut = true },
                new MenuItem { Id = 4, Name = "Fruit Bowl", Description = "A refreshing mix of seasonal fruit slices.", Price = 240, Category = "Dessert", SoldOut = false },
                new MenuItem { Id = 5, Name = "Crispy Fries", Description = "Golden fries served with ketchup and a hint of sea salt.", Price = 200, Category = "Snack", SoldOut = false },
                new MenuItem { Id = 6, Name = "Mint Lemonade", Description = "A cool and refreshing drink with mint and lemon.", Price = 160, Category = "Drink", SoldOut = false }
            );
        }
    }
}
