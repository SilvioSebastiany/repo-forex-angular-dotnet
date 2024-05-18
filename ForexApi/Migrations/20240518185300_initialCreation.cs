using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ForexApi.Migrations
{
    /// <inheritdoc />
    public partial class initialCreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Paridades",
                columns: table => new
                {
                    ParidadeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Moeda = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Preco = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Swap = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paridades", x => x.ParidadeId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Paridades");
        }
    }
}
