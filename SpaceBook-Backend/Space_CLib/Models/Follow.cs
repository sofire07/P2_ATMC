﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SpaceBook.Models
{
    public class Follow :IDate
    {
        [Key]
        public int FollowID { get; set; }

        public DateTime Date { get; set; }

        public User Followed { get; set; }

        public User Follower { get; set; }

        public Follow()
        {
            Date = DateTime.Now;
        }

    }
}
