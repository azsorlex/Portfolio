namespace Portfolio.Domain.Exceptions
{
    public class BadRequestException(string message) : Exception(message)
    {
    }
}