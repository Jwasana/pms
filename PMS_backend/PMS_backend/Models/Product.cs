﻿namespace PMS_backend.Models
{
    public class Product
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public string Color { get; set; }

        public decimal Price { get; set; }
    }
}
