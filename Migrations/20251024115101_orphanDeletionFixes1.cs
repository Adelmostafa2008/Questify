using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class orphanDeletionFixes1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1a680b98-77ed-4a28-95ef-a94f49cde89f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8368f63c-71a8-4afe-b747-613b66ac9414");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2ad92dfe-5a46-469c-a05e-e4462bd63e57", null, "User", "USER" },
                    { "3ed069a8-753c-42f4-951c-c7ae3485e84e", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2ad92dfe-5a46-469c-a05e-e4462bd63e57");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3ed069a8-753c-42f4-951c-c7ae3485e84e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1a680b98-77ed-4a28-95ef-a94f49cde89f", null, "Admin", "ADMIN" },
                    { "8368f63c-71a8-4afe-b747-613b66ac9414", null, "User", "USER" }
                });
        }
    }
}
