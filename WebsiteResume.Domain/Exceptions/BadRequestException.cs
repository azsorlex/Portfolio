﻿namespace WebsiteResume.Domain.Exceptions
{
    public class BadRequestException(string message) : Exception(message)
    {
    }
}