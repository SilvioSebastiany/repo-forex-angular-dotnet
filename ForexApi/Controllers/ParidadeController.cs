using ForexApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ForexApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ParidadesController : ControllerBase
{
    private readonly Contexto _contexto;

    public ParidadesController(Contexto contexto)
    {
        _contexto = contexto;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Paridade>>> PegarTodosAsync()
    {
        return await _contexto.Paridades.ToListAsync();
    }

    [HttpGet("{paridadeId}")]
    public async Task<ActionResult<Paridade>> PegarParidadePeloAsync(int paridadeId)
    {
        Paridade paridade = await _contexto.Paridades.FindAsync(paridadeId);

        if(paridade == null)
            return NotFound();
        
        return paridade;
    }

    [HttpPost]
    public async Task<ActionResult<Paridade>> SalvarParidadeAsync(Paridade paridade)
    {
        await _contexto.Paridades.AddAsync(paridade);
        await _contexto.SaveChangesAsync();

        return Ok();
        return Ok();
    }

    [HttpPut]
    public async Task<ActionResult> AtualizarParidadeAsync(Paridade paridade)
    {
        _contexto.Paridades.Update(paridade);
        await _contexto.SaveChangesAsync();
        
        return Ok();
        return Ok();
    }

    [HttpDelete("{paridadeId}")]
    public async Task<ActionResult> ExcluirParidadeAsync(int paridadeId)
    {
        Paridade paridade = await _contexto.Paridades.FindAsync(paridadeId);
        _contexto.Remove(paridade);
        await _contexto.SaveChangesAsync();

        return Ok();
    }

}