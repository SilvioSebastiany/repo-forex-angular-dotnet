using Microsoft.EntityFrameworkCore;
using ForexApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Adicionado vs.001
ConfigureServices(builder); 

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// tesste
 // Adicionado vs.001
void ConfigureServices(WebApplicationBuilder services)
{
    builder.Services.AddDbContext<Contexto>(opcoes => opcoes.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoBD")));

    // vs 003
    builder.Services.AddCors();
}

// vs 003
app.UseCors(opcoes => opcoes.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
