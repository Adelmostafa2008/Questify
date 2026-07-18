using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class googlesub : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1f4ffb19-37b6-423f-8b08-224f57985cbc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7778d65c-3638-4b2d-bbc9-f666e18b0258");

            migrationBuilder.AddColumn<string>(
                name: "GoogleSub",
                table: "AspNetUsers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ba6ea825-6ef8-46bc-b307-b257da2f61dd", null, "Admin", "ADMIN" },
                    { "d8173d9e-e4ea-404b-8400-1ac20e9c7a1f", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ba6ea825-6ef8-46bc-b307-b257da2f61dd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d8173d9e-e4ea-404b-8400-1ac20e9c7a1f");

            migrationBuilder.DropColumn(
                name: "GoogleSub",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1f4ffb19-37b6-423f-8b08-224f57985cbc", null, "Admin", "ADMIN" },
                    { "7778d65c-3638-4b2d-bbc9-f666e18b0258", null, "User", "USER" }
                });
        }
    }
}
