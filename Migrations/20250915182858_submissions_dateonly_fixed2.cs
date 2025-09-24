using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class submissions_dateonly_fixed2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a0a9bfa-1574-4bd1-a57f-81a5887f8d4b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "45c83695-19b1-475c-b375-6ab773b783cc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7fed4eb4-06ab-42e0-8c4d-2b9f5dec51e4", null, "Admin", "ADMIN" },
                    { "82158b6f-5159-4d1d-95fb-d5f9c44f5551", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "0a0a9bfa-1574-4bd1-a57f-81a5887f8d4b", null, "User", "USER" },
                    { "45c83695-19b1-475c-b375-6ab773b783cc", null, "Admin", "ADMIN" }
                });
        }
    }
}
