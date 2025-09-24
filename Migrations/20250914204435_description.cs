using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class description : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3034b94f-548c-4f6d-aa2e-6e76b7d0733f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed94eab0-5297-48c9-b9ca-7903155dec9d");

            migrationBuilder.AddColumn<string>(
                name: "Describtion",
                table: "AspNetUsers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5a2f2125-27c7-42c6-a7e0-ce0a37cf79a6", null, "User", "USER" },
                    { "dd3a70ca-cb9b-4735-ba89-e16a94becd42", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5a2f2125-27c7-42c6-a7e0-ce0a37cf79a6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dd3a70ca-cb9b-4735-ba89-e16a94becd42");

            migrationBuilder.DropColumn(
                name: "Describtion",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3034b94f-548c-4f6d-aa2e-6e76b7d0733f", null, "User", "USER" },
                    { "ed94eab0-5297-48c9-b9ca-7903155dec9d", null, "Admin", "ADMIN" }
                });
        }
    }
}
