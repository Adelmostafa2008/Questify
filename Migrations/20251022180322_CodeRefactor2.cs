using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class CodeRefactor2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "98af476c-85f0-4bf7-9862-c1c211ea3347");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b42e73b9-4603-4526-903e-bb39ed435401");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1eb7efdf-834e-433b-bd1d-8e839d798a44", null, "Admin", "ADMIN" },
                    { "f0bbc0eb-e41f-40bb-bdeb-bd3bad069cf6", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1eb7efdf-834e-433b-bd1d-8e839d798a44");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f0bbc0eb-e41f-40bb-bdeb-bd3bad069cf6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "98af476c-85f0-4bf7-9862-c1c211ea3347", null, "User", "USER" },
                    { "b42e73b9-4603-4526-903e-bb39ed435401", null, "Admin", "ADMIN" }
                });
        }
    }
}
