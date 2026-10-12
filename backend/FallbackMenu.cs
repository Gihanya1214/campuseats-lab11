using CampusEats.Api.Models;

namespace CampusEats.Api.Data;

public static class FallbackMenu
{
    public static readonly IReadOnlyList<MenuItem> Items =
    [
        new MenuItem { Id = 1, Name = "Classic Burger", Description = "A juicy grilled beef burger served with lettuce, tomato, and cheese.", Price = 450, Category = "Main", SoldOut = false },
        new MenuItem { Id = 2, Name = "Veggie Pasta", Description = "Creamy pasta tossed with fresh vegetables and herbs.", Price = 380, Category = "Main", SoldOut = false },
        new MenuItem { Id = 3, Name = "Chicken Wrap", Description = "Grilled chicken wrapped with salad and spicy sauce.", Price = 320, Category = "Snack", SoldOut = true },
        new MenuItem { Id = 4, Name = "Fruit Bowl", Description = "A refreshing mix of seasonal fruit slices.", Price = 240, Category = "Dessert", SoldOut = false },
        new MenuItem { Id = 5, Name = "Crispy Fries", Description = "Golden fries served with ketchup and a hint of sea salt.", Price = 200, Category = "Snack", SoldOut = false },
        new MenuItem { Id = 6, Name = "Mint Lemonade", Description = "A cool and refreshing drink with mint and lemon.", Price = 160, Category = "Drink", SoldOut = false }
    ];
}
