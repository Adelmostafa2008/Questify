using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class submissions_dateonly_fixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UTsubmission_AspNetUsers_UserId",
                table: "UTsubmission");

            migrationBuilder.DropForeignKey(
                name: "FK_UTsubmission_Tasks_TaskId",
                table: "UTsubmission");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UTsubmission",
                table: "UTsubmission");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "26b95309-80a8-44b7-a171-6bf3df802889");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4555dbcb-2f07-4603-ad2c-d113cfd0e2fc");

            migrationBuilder.RenameTable(
                name: "UTsubmission",
                newName: "Submissions");

            migrationBuilder.RenameIndex(
                name: "IX_UTsubmission_TaskId",
                table: "Submissions",
                newName: "IX_Submissions_TaskId");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "SubmissionDate",
                table: "Submissions",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Submissions",
                table: "Submissions",
                columns: new[] { "UserId", "TaskId" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0a0a9bfa-1574-4bd1-a57f-81a5887f8d4b", null, "User", "USER" },
                    { "45c83695-19b1-475c-b375-6ab773b783cc", null, "Admin", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Submissions_AspNetUsers_UserId",
                table: "Submissions",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Submissions_Tasks_TaskId",
                table: "Submissions",
                column: "TaskId",
                principalTable: "Tasks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Submissions_AspNetUsers_UserId",
                table: "Submissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Submissions_Tasks_TaskId",
                table: "Submissions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Submissions",
                table: "Submissions");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a0a9bfa-1574-4bd1-a57f-81a5887f8d4b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "45c83695-19b1-475c-b375-6ab773b783cc");

            migrationBuilder.RenameTable(
                name: "Submissions",
                newName: "UTsubmission");

            migrationBuilder.RenameIndex(
                name: "IX_Submissions_TaskId",
                table: "UTsubmission",
                newName: "IX_UTsubmission_TaskId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "SubmissionDate",
                table: "UTsubmission",
                type: "datetime(6)",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UTsubmission",
                table: "UTsubmission",
                columns: new[] { "UserId", "TaskId" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "26b95309-80a8-44b7-a171-6bf3df802889", null, "User", "USER" },
                    { "4555dbcb-2f07-4603-ad2c-d113cfd0e2fc", null, "Admin", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_UTsubmission_AspNetUsers_UserId",
                table: "UTsubmission",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UTsubmission_Tasks_TaskId",
                table: "UTsubmission",
                column: "TaskId",
                principalTable: "Tasks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
