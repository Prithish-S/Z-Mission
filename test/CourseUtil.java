public class CourseUtil {

    private CourseUtil() {}

    public static final int WORDS_PER_MINUTE = 200;

    public static int countWords(String text) {
        if (text == null || text.trim().isEmpty()) return 0;
        String[] words = text.trim().split("\\s+");
        return words.length;
    }

    public static String removeImageReferences(String text) {
        text = text.replaceAll("(?i)<img[^>]*>", "");
        text = text.replaceAll("!\\[[^\\]]*\\]\\([^\\)]*\\)", "");
        text = text.replaceAll("data:image/[^;]+;base64,[A-Za-z0-9+/=]+", "");
        return text;
    }

    public static int calculateReadTime(String content) {
        String cleanedContent = removeImageReferences(content);
        int wordCountForReadingTime = countWords(cleanedContent);

        if (wordCountForReadingTime == 0 || wordCountForReadingTime < WORDS_PER_MINUTE) {
            return 0;
        } else {
            return (int) Math.ceil( wordCountForReadingTime / WORDS_PER_MINUTE);
        }
    }
}
