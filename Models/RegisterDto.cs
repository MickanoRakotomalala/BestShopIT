using System.ComponentModel.DataAnnotations;

namespace BestShopIT.Models
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "The FirstName field is required"), MaxLength(100)]
        public string FirstName { get; set; } = "";
        [Required(ErrorMessage = "The LastName field is required"), MaxLength(100)]
        public string LastName { get; set; } = "";
        [Required, EmailAddress, MaxLength(100)]
        public string Email { get; set; } = "";
        [Required(ErrorMessage = "The PhoneNumber field is required"), MaxLength(20),MinLength(10)]
        public string? PhoneNumber { get; set; } = "";
        [Required(ErrorMessage = "The Address field is required"), MaxLength(80)]
        public string Address { get; set; } = "";
        [Required, MaxLength(100)]
        public string Password { get; set; } = "";
        [Required(ErrorMessage = "The Confirm Password field is required")]
        [Compare("Password", ErrorMessage = "Confirm Password and Password do not match")]
        public string ConfirmPassword { get; set; } = "";
    }
}
