import java.time.Duration;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.SignStyle;
import java.time.temporal.ChronoField;
import java.time.temporal.TemporalAccessor;
import java.util.List;
import java.util.ArrayList;

class Animal {
    private String name;
    public Animal(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void makeSound() {
        System.out.println("mmm");
    }
}

class Dog extends Animal {
    private String master;
    public Dog(String master, String name) {
        super(name);
        this.master = master;
    }
    public String getMaster() {
        return master;
    }
    public void setMaster(String master) {
        this.master = master;
    }
    @Override
    public void makeSound() {
        System.out.println("woff");
    }
}

class Main {

    // static final DateTimeFormatter DURATION_FORMATTER = new DateTimeFormatterBuilder()
    //     .optionalStart()
    //     .appendValue(ChronoField.DAY_OF_MONTH, 1, 2, SignStyle.NOT_NEGATIVE)
    //     .appendLiteral('.')
    //     .optionalEnd()
    //     .appendValue(ChronoField.HOUR_OF_DAY, 2)
    //     .appendLiteral(':')
    //     .appendValue(ChronoField.MINUTE_OF_HOUR, 2)
    //     .optionalStart()
    //     .appendLiteral(':')
    //     .appendValue(ChronoField.SECOND_OF_MINUTE, 2)
    //     .optionalStart()
    //     .appendFraction(ChronoField.NANO_OF_SECOND, 0, 9, true)
    //     .toFormatter();

    // public static Duration map(String durationStr) {
    //     if (!durationStr.isBlank()) {
    //         TemporalAccessor durationTemporalAccessor = DURATION_FORMATTER.parse(durationStr);
    //         Duration duration = Duration.ofMillis(durationTemporalAccessor.getLong(ChronoField.MILLI_OF_DAY));

    //         if (durationTemporalAccessor.isSupported(ChronoField.DAY_OF_MONTH)) {
    //             duration = duration.plusDays(durationTemporalAccessor.getLong(ChronoField.DAY_OF_MONTH));
    //         }
    //         return duration;
    //     }

    //     return null;
    // }

    public static void main(String[] args) {
        // Animal a = new Animal("ant");
        // a.makeSound();
        // System.out.println(a.getName());

        // Dog b = new Dog("frank", "kuso");
        // b.makeSound();
        // Animal a = b;
        // Dog c = (Dog)a;
        // a.makeSound();
        // c.makeSound();
        // System.out.println(b.getName());
        // System.out.println(b.getMaster());
        // System.out.println(a.getName());
        // System.out.println(c.getName());
        // System.out.println(c.getMaster());

        // System.out.println(map("1.13:14:50.0901259"));

        // try {
        //     try {
        //         String s = "null";
        //         Boolean b = s.isEmpty();
        //         Integer a = 4 / 0;
        //     } catch (NullPointerException e) {
        //         System.err.println("catch null pointer ex 1");
        //         throw new Exception("error 1", e);
        //     } 
        //     catch (Exception e) {
        //         System.err.println("catch ex 1.2");
        //         // throw new Exception("error 1.2", e);
        //     }
        //     System.err.println("post");

        // } catch (Exception e) {
        //     System.err.println("catch 2");
        // } finally {
        //     System.err.println("finally");
        // }

        // URIBuilder builder = new URIBuilder("file://\\\\brc-storage.notariado.org\\SIGNO70763\\ScriptingSQL\\?auth-username=sccmancert%5CSIGNO70763&auth-password=b4Q%24r3m.");
        // System.out.println(builder);
        // System.out.println(builder.getQueryParams());

        List<String> items = new ArrayList<>();
        final int countJobs = 6;
        List<String> auxResult = List.of("1", "2", "3", "4", "5", "6");
        List<String> signatureItems = List.of("1", "3");
        items.addAll(
            signatureItems.subList(
                Math.min(5, 2),
                Math.min(5 + 5, 2)
            )
        );
        System.out.println(items);

    }
}