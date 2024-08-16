using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace findFriends.Migrations
{
    /// <inheritdoc />
    public partial class ModelRevisions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Chats_ChatId",
                table: "ChatMessages");

            migrationBuilder.DropForeignKey(
                name: "FK_Chats_Users_UserId",
                table: "Chats");

            migrationBuilder.DropIndex(
                name: "IX_Chats_UserId",
                table: "Chats");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Chats");

            migrationBuilder.AlterColumn<string>(
                name: "ChatId",
                table: "UserChats",
                type: "character varying(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "ChatId",
                table: "ChatMessages",
                type: "character varying(100)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(100)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserChats_ChatId",
                table: "UserChats",
                column: "ChatId");

            migrationBuilder.CreateIndex(
                name: "IX_UserChats_UserId",
                table: "UserChats",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Chats_ChatId",
                table: "ChatMessages",
                column: "ChatId",
                principalTable: "Chats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            // migrationBuilder.AddForeignKey(
            //     name: "FK_UserChats_Chats_ChatId",
            //     table: "UserChats",
            //     column: "ChatId",
            //     principalTable: "Chats",
            //     principalColumn: "Id",
            //     onDelete: ReferentialAction.Cascade);

            // migrationBuilder.AddForeignKey(
            //     name: "FK_UserChats_Users_UserId",
            //     table: "UserChats",
            //     column: "UserId",
            //     principalTable: "Users",
            //     principalColumn: "Id",
            //     onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Chats_ChatId",
                table: "ChatMessages");

            // migrationBuilder.DropForeignKey(
            //     name: "FK_UserChats_Chats_ChatId",
            //     table: "UserChats");

            // migrationBuilder.DropForeignKey(
            //     name: "FK_UserChats_Users_UserId",
            //     table: "UserChats");

            migrationBuilder.DropIndex(
                name: "IX_UserChats_ChatId",
                table: "UserChats");

            migrationBuilder.DropIndex(
                name: "IX_UserChats_UserId",
                table: "UserChats");

            migrationBuilder.AlterColumn<string>(
                name: "ChatId",
                table: "UserChats",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(100)");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Chats",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ChatId",
                table: "ChatMessages",
                type: "character varying(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(100)");

            migrationBuilder.CreateIndex(
                name: "IX_Chats_UserId",
                table: "Chats",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Chats_ChatId",
                table: "ChatMessages",
                column: "ChatId",
                principalTable: "Chats",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Chats_Users_UserId",
                table: "Chats",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
