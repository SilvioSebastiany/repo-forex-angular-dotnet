using Microsoft.EntityFrameworkCore;

namespace ForexApi.Models;

public class Contexto : DbContext
{
    public DbSet<Paridade> Paridades { get; set; }

    public Contexto(DbContextOptions<Contexto> options) : base(options)
    {

    }
}