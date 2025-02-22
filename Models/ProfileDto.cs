﻿using System.ComponentModel.DataAnnotations;

namespace BestShopIT.Models
{
    public class ProfileDto
    {
        [Required(ErrorMessage = "The FirstName field is required"), MaxLength(100)]
        public string FirstName { get; set; } = "";
        [Required(ErrorMessage = "The LastName field is required"), MaxLength(100)]
        public string LastName { get; set; } = "";
        [Required, EmailAddress, MaxLength(100)]
        public string Email { get; set; } = "";
        [Required(ErrorMessage = "The format of the Phone Number is not valid"), MaxLength(20)]
        public string? PhoneNumber { get; set; }
        [Required, MaxLength(200)]
        public string Address { get; set; } = "";
    }
}
