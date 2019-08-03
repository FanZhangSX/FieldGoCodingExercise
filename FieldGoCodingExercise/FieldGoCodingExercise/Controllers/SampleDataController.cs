using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FieldGoCodingExercise.Models;
using System.Collections;

namespace FieldGoCodingExercise.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly static string[] names = new[]
        {
             "Van", "Pine tree", "Snake", "Giraffe", "Sheet of paper", "Television"
        };
        private readonly static int min = 0;
        private readonly static int max = 100;

        [HttpGet("[action]")]
        public IEnumerable<Item> GetItems()
        {
            
            var rng = new Random();
            var rngItems = Enumerable.Range(1, 10).Select(index => new Item
            {
                Name = names[(index + rng.Next(1, 6)) % 6] + " " + index.ToString(),
                Height = Math.Round(rng.NextDouble() * (max - min), 4),
                Length = Math.Round(rng.NextDouble() * (max - min), 4),
                Width = Math.Round(rng.NextDouble() * (max - min), 4),
                Mass = Math.Round(rng.NextDouble() * (max - min), 4)
            });

            var ret = ExampleItems();

            ret.AddRange(rngItems);

            return ret;

        }

        private List<Item> ExampleItems()
        {
            return new List<Item>()
            {
                new Item() {Name = "Van", Height = 1.5, Length = 3.5, Width = 1.8, Mass = 2400},
                new Item() {Name = "Pine tree", Height = 50, Length = 10, Width = 10, Mass = 3000},
                new Item() {Name = "Snake", Height = 0.1, Length = 3, Width = 0.1, Mass = 20},
                new Item() {Name = "Giraffe", Height = 5, Length = 2, Width = 1, Mass = 4000},
                new Item() {Name = "Sheet of paper", Height = 0.0001, Length = 0.3, Width = 0.2, Mass = 0.005},
                new Item() {Name = "Television", Height = 0.6, Length = 1, Width = 0.1, Mass = 10},
            };
        }
        
    }
}
