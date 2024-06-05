namespace Portfolio.Domain.Exceptions
{
    public class NotFoundException(string objectName) : Exception($"No {objectName}s were found in the database.")
    {
    }
}