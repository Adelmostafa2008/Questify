using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class submissions_fixes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7fed4eb4-06ab-42e0-8c4d-2b9f5dec51e4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "82158b6f-5159-4d1d-95fb-d5f9c44f5551");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "79d17c80-1019-4791-bc32-b52ef158ef1f", null, "Admin", "ADMIN" },
                    { "dab91546-8a32-48ff-92dc-77027b021010", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "79d17c80-1019-4791-bc32-b52ef158ef1f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dab91546-8a32-48ff-92dc-77027b021010");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7fed4eb4-06ab-42e0-8c4d-2b9f5dec51e4", null, "Admin", "ADMIN" },
                    { "82158b6f-5159-4d1d-95fb-d5f9c44f5551", null, "User", "USER" }
                });
        }
    }
}
